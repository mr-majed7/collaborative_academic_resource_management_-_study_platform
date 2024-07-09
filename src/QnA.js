import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function QnA() {
  const [question, setQuestion] = useState('');
  const [reply, setReply] = useState('');
  const questions = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  const handlePostQuestion = () => {
    dispatch({ type: 'POST_QUESTION', payload: { question } });
    setQuestion('');
  };

  const handleReply = (questionId) => {
    dispatch({ type: 'REPLY_QUESTION', payload: { questionId, reply } });
    setReply('');
  };

  const handleUpvote = (questionId) => {
    dispatch({ type: 'UPVOTE_QUESTION', payload: { questionId } });
  };

  const handleDownvote = (questionId) => {
    dispatch({ type: 'DOWNVOTE_QUESTION', payload: { questionId } });
  };

  return (
    <div>
      <h2>Q&A</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Post a question"
      />
      <button onClick={handlePostQuestion}>Post</button>
      <ul>
        {questions.map((q, index) => (
          <li key={index}>
            {q.question}
            <button onClick={() => handleUpvote(q.id)}>Upvote</button>
            <button onClick={() => handleDownvote(q.id)}>Downvote</button>
            <ul>
              {q.replies.map((reply, idx) => (
                <li key={idx}>{reply}</li>
              ))}
            </ul>
            <input
              type="text"
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Reply to this question"
            />
            <button onClick={() => handleReply(q.id)}>Reply</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QnA;
