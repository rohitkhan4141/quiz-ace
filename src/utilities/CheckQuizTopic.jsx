const checkQuizTopic = (id) => {
  let topic;
  if (id === "1") {
    topic = "React";
  } else if (id === "2") {
    topic = "JavaScript";
  } else if (id === "4") {
    topic = "Css";
  } else if (id === "5") {
    topic = "Git";
  } else {
    return;
  }
  return topic;
};

export { checkQuizTopic };
