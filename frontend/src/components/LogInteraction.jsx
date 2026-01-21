import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInteractionAI } from "../slices/interactionSlice";

const LogInteraction = () => {
  const dispatch = useDispatch();
  const aiData = useSelector((state) => state.interaction.aiData);

  // Form states (LEFT SIDE)
  const [hcpName, setHcpName] = useState("");
  const [interactionType, setInteractionType] = useState("");
  const [topics, setTopics] = useState("");
  const [sentiment, setSentiment] = useState("");
  const [outcome, setOutcome] = useState("");
  const [followUp, setFollowUp] = useState("");

  // Chat input (RIGHT SIDE)
  const [chatText, setChatText] = useState("");

  const handleAI = () => {
    dispatch(logInteractionAI(chatText));
  };

  // 🔥 AUTO-FILL FORM WHEN AI DATA ARRIVES
  useEffect(() => {
    if (aiData) {
      setHcpName(aiData.hcp_name || "");
      setInteractionType(aiData.interaction_type || "");
      setTopics(aiData.topics || "");
      setSentiment(aiData.sentiment || "");
      setOutcome(aiData.outcome || "");
      setFollowUp(aiData.follow_up || "");
    }
  }, [aiData]);

  return (
    <div style={{ display: "flex", padding: 30, fontFamily: "Inter" }}>
      
      {/* LEFT SIDE – FORM */}
      <div style={{ width: "60%", paddingRight: 20 }}>
        <h2>Log HCP Interaction</h2>

        <input value={hcpName} placeholder="HCP Name" />
        <br /><br />

        <input value={interactionType} placeholder="Interaction Type" />
        <br /><br />

        <textarea value={topics} placeholder="Topics Discussed" />
        <br /><br />

        <input value={sentiment} placeholder="Sentiment" />
        <br /><br />

        <textarea value={outcome} placeholder="Outcome" />
        <br /><br />

        <textarea value={followUp} placeholder="Follow-up Actions" />
      </div>

      {/* RIGHT SIDE – AI CHAT */}
      <div style={{ width: "40%" }}>
        <h3>AI Assistant</h3>
        <textarea
          placeholder="Describe interaction..."
          rows={6}
          value={chatText}
          onChange={(e) => setChatText(e.target.value)}
        />
        <br /><br />
        <button onClick={handleAI}>Log via AI</button>
      </div>
    </div>
  );
};

export default LogInteraction;
