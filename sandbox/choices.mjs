const choices = {

    "title": "Homework Hustle",

    "start": "start",
 
    "nodes": {
 
      "start": {
 
        "text": "You're sitting at your desk, a pile of textbooks and notebooks sprawled across it. It's late, and you still have a mountain of homework to conquer. What do you do?",
 
        "choices": [
 
          {
 
            "text": "Start with the easiest assignment first.",
 
            "go_to": "easy_first"
 
          },
 
          {
 
            "text": "Tackle the hardest assignment head-on.",
 
            "go_to": "hard_first"
 
          },
 
          {
 
            "text": "Take a short break to clear your head.",
 
            "go_to": "break"
 
          }
 
        ]
 
      },
 
      "easy_first": {
 
        "text": "You decide to warm up with the easier assignment. It's a quick win, boosting your confidence. Feeling motivated, you tackle the harder assignments. Do you...",
 
        "choices": [
 
          {
 
            "text": "Power through the remaining assignments.",
 
            "go_to": "power_through"
 
          },
 
          {
 
            "text": "Take another short break to recharge.",
 
            "go_to": "recharge"
 
          }
 
        ]
 
      },
 
      "hard_first": {
 
        "text": "You dive straight into the most challenging assignment. It's tough, but you're determined. After a while, you make a breakthrough. Feeling accomplished, you tackle the easier assignments. Do you...",
 
        "choices": [
 
          {
 
            "text": "Finish the remaining assignments quickly.",
 
            "go_to": "finish_quick"
 
          },
 
          {
 
            "text": "Reward yourself with a longer break.",
 
            "go_to": "reward_break"
 
          }
 
        ]
 
      },
 
      "break": {
 
        "text": "You take a short break to stretch, grab a snack, or meditate. Feeling refreshed, you return to your homework. Do you start with the easiest or hardest assignment?",
 
        "choices": [
 
          {
 
            "text": "Easiest assignment first.",
 
            "go_to": "easy_first"
 
          },
 
          {
 
            "text": "Hardest assignment first.",
 
            "go_to": "hard_first"
 
          }
 
        ]
 
      },
 
      "power_through": {
 
        "text": "You push through the remaining assignments, determined to finish. Finally, you're done! You feel a sense of accomplishment. **Congratulations, you've conquered your homework!**"
 
      },
 
      "recharge": {
 
        "text": "You take another short break to recharge. Feeling refreshed, you finish the remaining assignments. **Congratulations, you've conquered your homework!**"
 
      },
 
      "finish_quick": {
 
        "text": "You quickly finish the remaining assignments. **Congratulations, you've conquered your homework!**"
 
      },
 
      "reward_break": {
 
        "text": "You reward yourself with a longer break. Feeling refreshed, you finish the remaining assignments. **Congratulations, you've conquered your homework!**"
 
      }
 
    }
 
  }

  export default choices;