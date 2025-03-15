require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const achievementRoutes = require("./routes/AchievementRoutes");
const commentRoutes = require("./routes/CommentRoutes");
const fileUploadRoutes = require("./routes/FileUploadRoutes");
const knowledgeRoutes = require("./routes/KnowledgeRoutes");
const leaderboardRoutes = require("./routes/LeaderboardRoutes");
const miniGameRoutes = require("./routes/MiniGameRoutes");
const notificationRoutes = require("./routes/NotificationRoutes");
const progressRoutes = require("./routes/ProgressRoutes");
const questionRoutes = require("./routes/QuestionRoutes");
const quizRoutes = require("./routes/QuizRoutes");
const submissionRoutes = require("./routes/SubmissionRoutes");
const techniqueRoutes = require("./routes/TechniqueRoutes");
const userRoutes = require("./routes/UserRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/achievements", achievementRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/files", fileUploadRoutes);
app.use("/api/knowledge", knowledgeRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
app.use("/api/minigames", miniGameRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/quizzes", quizRoutes);
app.use("/api/submissions", submissionRoutes);
app.use("/api/techniques", techniqueRoutes);
app.use("/api/users", userRoutes);

connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Mind Quest backend is running!");
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

