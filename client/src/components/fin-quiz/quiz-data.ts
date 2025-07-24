export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "What is the minimum age to open a bank account in India?",
    options: ["10 years", "18 years", "21 years", "15 years"],
    correctAnswerIndex: 0,
  },
  {
    question: "What does PAN stand for?",
    options: [
      "Permanent Account Number",
      "Personal Access Number",
      "Private Account Number",
      "Public Access Name"
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "Which organization regulates the stock market in India?",
    options: ["RBI", "IRDAI", "SEBI", "NABARD"],
    correctAnswerIndex: 2,
  },
];
