export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Post {
  id: string;
  content: string;
  authorId: string;
  createdAt: Date;
}

export interface JournalEntry {
  id: string;
  content: string;
  mood: string;
  date: Date;
}