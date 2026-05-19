import { useState, useRef, useEffect } from "react"
import {
  Paper,
  Box,
  TextField,
  IconButton,
  Typography,
} from "@mui/material"

import SendIcon from "@mui/icons-material/Send"
import forumData from "../data/forum.json" 


export default function Forum() {
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState("")

  const scrollRef = useRef<HTMLDivElement | null>(null)

  const handleSend = () => {
    if (!input.trim()) return

    setMessages((prev) => [
      ...prev,
      input,
    ])

    setInput("")
  }

  //load forum data
  useEffect(() => {
    const forumStorage = localStorage.getItem("forumData")
    if(forumStorage == null){
      setMessages(forumData["Messages"])
    } else {
      const parsed = JSON.parse(forumStorage)
      setMessages(parsed)
    }
  },[]);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    })

    // save forum chats to local storage
    if(messages.length > 0){
      localStorage.setItem("forumData",JSON.stringify(messages))
    }

  }, [messages])

  return (
    <Paper
      elevation={3}
      sx={{
        height: "100vh",
        width: "100%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        backgroundColor: "#2f2f2f",
        overflow: "hidden",
        mt:4
      }}
    >
      {/* Messages */}
      <Box
        ref={scrollRef}
        sx={{
          flex: 1,
          overflowY: "auto",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        {messages.map((msg, index) => (
          <Box
            key={index}
            sx={{
              alignSelf: "flex-end",
              maxWidth: "75%",
              backgroundColor: "#4a4a4a",
              color: "white",
              padding: "10px 14px",
              borderRadius: 3,
              wordBreak: "break-word",
            }}
          >
            <Typography variant="body1">
              {msg}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Input area */}
      <Box
        sx={{
          display: "flex",
          padding: 2,
          gap: 1,
          backgroundColor: "#1f1f1f",
        }}
      >
        <TextField
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend()
          }}
          placeholder="Type a message..."
          variant="outlined"
          size="small"
          sx={{
            input: { color: "white" },
            "& .MuiOutlinedInput-root": {
              color: "white",
              "& fieldset": {
                borderColor: "#555",
              },
              "&:hover fieldset": {
                borderColor: "#888",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#aaa",
              },
            },
          }}
        />

        <IconButton
          onClick={handleSend}
          sx={{
            color: "white",
            backgroundColor: "#444",
            "&:hover": {
              backgroundColor: "#666",
            },
          }}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  )
}