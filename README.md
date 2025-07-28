# GenAI Virtual Assistant (MERN + Gemini API)

A sleek, conversational AI assistant built using the MERN stack and powered by Google’s Gemini API.

## 🚀 Features
- Voice-enabled conversation using Web Speech API
- Smart responses via Gemini API (Google GenAI SDK)
- JWT-based user authentication
- File/image uploads (Multer + Cloudinary)
- Responsive UI for web and mobile

## 🛠️ Tech Stack

**Frontend:**
- React
- Tailwind CSS
- Material Tailwind

**Backend:**
- Node.js
- Express.js
- MongoDB (Atlas)
- Google GenAI SDK (Gemini API)
- Multer, Cloudinary
- JWT, bcryptjs

## 📁 Project Structure
GenAI-VirtualAssistantGEMINI-API-MERN/
├── client/         # React frontend  
├── server/         # Node.js backend  
├── README.md  
└── .env            # Environment variables (not committed)

## 🔧 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/zaidmirza24/GenAI-VirtualAssistantGEMINI-API-MERN.git  
cd GenAI-VirtualAssistantGEMINI-API-MERN

### 2. Backend Setup
```bash
cd server  
npm install

Create a `.env` file in the `server/` folder with:
```bash
MONGODB_URI=your_mongo_connection_string  
GOOGLE_API_KEY=your_gemini_api_key  
JWT_SECRET=your_jwt_secret  
CLOUDINARY_CLOUD_NAME=your_cloud_name  
CLOUDINARY_API_KEY=your_api_key  
CLOUDINARY_API_SECRET=your_api_secret

Run the backend:
```bash
npm run dev

### 3. Frontend Setup
```bash
cd ../client  
npm install

Create a `.env` file in the `client/` folder with:
REACT_APP_SERVER_API=http://localhost:5000

Run the frontend:
```bash
npm start

### 4. Open the App
```bash
Visit http://localhost:3000 in your browser.

## 💡 Usage
- Start chatting via text or voice.
- View assistant responses powered by Gemini AI.
- Upload files/images into the chat.
- User authentication and assistant personalization supported.

## 🤝 Contributing
1. Fork the repo  
2. Create a feature branch  
3. Submit a pull request

## 📄 License
Zaid Mirza

## 👤 Author
Made with 💡 by **Zaid Mirza Mohd**  
Feel free to connect for suggestions or collaborations!
