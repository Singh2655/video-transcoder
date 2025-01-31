const passport = require("passport");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
const User = require("../models/user.model.js");

const connectPassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
        scope: ["profile", "email"],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await User.findOne({ googleId: profile.id });
          console.log("user :", user);
          if (!user) {
            const email = profile.emails?.[0]?.value ?? null;
            const avatar = profile.photos?.[0]?.value ?? null;
            const newUser = {
              displayName: profile.displayName,
              googleId: profile.id,
              email,
              avatar,
            };

            console.log("user 1:", user);
            user = await User.create(newUser);
            console.log("user created");
          }

          done(null, user);
        } catch (error) {
          // Consider creating a custom error object with details
          console.log("auth error", error);
          done(new Error("Error during Google authentication"), null);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
  });
};

module.exports = {
  connectPassport,
};
