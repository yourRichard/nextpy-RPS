"""Welcome to Nextpy! This file outlines the steps to create a basic app."""

import nextpy as xt
import random


class State(xt.State):
    """The app state."""
    choices: list = ["Rock","Paper","Scissor"]
    com_choice:str
    player_choice:str
    result:str
    score:str
    win = 0
    lose = 0
    
    
    def game_condition(self):
        
        if self.player_choice == self.com_choice:
            self.result = "Tie"
        elif self.player_choice == "Rock" and self.com_choice == "Paper":
            self.result = "You Lose"
        elif self.player_choice == "Paper" and self.com_choice == "Scissor":
            self.result = "You Lose"
        elif self.player_choice == "Scissor" and self.com_choice == "Rock":
            self.result = "You Lose"
        else:
            self.result = "You Win"
            
        
            
            
            
    
    def rock_btn(self):
        self.player_choice = "Rock"
        self.com_choice = random.choice(self.choices)
        if self.result == "You Win":
            self.win += 1
            
        elif self.result == "You Lose":
            self.lose += 1
        self.game_condition
        xt.text(
            self.com_choice,
            font_size= "30px",
        ),
        xt.text(
            self.player_choice,
            font_size= "30px",
        ),
        xt.text(
            self.result,
            font_size= "30px",
        ),
        xt.text(
            self.win,
            font_size= "30px",
        ),
        
        
    def paper_btn(self):
        self.player_choice = "Paper",
        self.com_choice = random.choice(self.choices),
        self.game_condition()
        if self.result == "You Win":
            self.win += 1
            
        elif self.result == "You Lose":
            self.lose += 1
        xt.text(
            self.player_choice,
            font_size= "30px",
        ),
        xt.text(
            self.com_choice,
            font_size= "30px",
        ),
        xt.text(
            self.result,
            font_size= "30px",
        ),
        xt.text(
            self.win,
            font_size= "30px",
        ),

    def scissor_btn(self):
        self.player_choice = "Scissor",
        self.com_choice = random.choice(self.choices),
        self.game_condition()
        if self.result == "You Win":
            self.win += 1
            
        elif self.result == "You Lose":
            self.lose += 1
        
        xt.text(
            self.com_choice,
            font_size= "30px",
        ),
        xt.text(
            self.player_choice,
            font_size= "30px",
        ),
        xt.text(
            self.result,
            font_size= "30px",
        ),
        xt.text(
            self.win,
            font_size= "30px",
        ),

        
        



def index() -> xt.Component:
    return xt.container(
        xt.text(
           "Rock,Paper,Scissor game with Nextpy",
           font_size = "45px",
           color = "black",
           width = "2000px",
           font_weight = "bold",
           margin_left = "280px"
       ),
        
        xt.box(
        
       xt.spacer(),
       
        xt.box(
          xt.text(
          f"{State.win}",
          font_size = "30px",
        ),
          xt.image(
           src="./rock.png",
           width="120px",
           height="120px",
           on_click = State.rock_btn,
           cursor="pointer",
           margin_right="30px",
           bg="#a37cf0",
           padding="20px",
           border_radius="30px",
           box_shadow ="0px 15px 25px rgba(0,0,0,0.15)",
           
        ),  
          xt.image(
           src="./paper.png",
           width="120px",
           height="120px",
           on_click = State.paper_btn,
           cursor="pointer",
           margin_right="30px",
           bg="#a37cf0",
           padding="20px",
           border_radius="30px",
           box_shadow ="0px 15px 25px rgba(0,0,0,0.15)",
        ),  
          xt.image(
           src="./scissor.png",
           width="120px",
           height="120px",
           on_click = State.scissor_btn,
           cursor="pointer",
           bg="#a37cf0",
           padding="20px",
           border_radius="30px",
           box_shadow ="0px 15px 25px rgba(0,0,0,0.15)",
        ),  
        display="flex",
        margin_left = "150px",
        padding_top="130px"
        ),
        xt.text(
          f"You choose >> {State.player_choice}",
          font_size="20px", 
          font_weight ="bold",
          margin_left="270px",
          margin_top="20px"
        ),
        xt.text(
          f"Computer choosed >> {State.com_choice}",
          font_size="20px", 
          font_weight ="bold",
          margin_left="230px",
        ),
        xt.text(
          f"{State.result}",
          font_size="20px", 
          font_weight ="bold",
          margin_left="305px",
          width="120px",
          height ="40px",
          bg="#d8b6e0",
          border_radius="3px",
          margin_top="30px",
          text_align="center",
          padding_top="5px",
          box_shadow ="0px 15px 25px rgba(0,0,0,0.15)",
        ),
            width="700px",
            height="500px",
            bg="white",
            margin_left = "315px",
            margin_top="40px",
            box_shadow ="0px 15px 25px rgba(0,0,0,0.15)",
            border_radius = "10px"
        ),
       
        bg="#e0e0e0",
        height="100vh",
        max_width = "auto",
        position = "relative",
        place_items = "center",
        
    )


# Add state and page to the app.

app = xt.App()
app.add_page(index)
app.compile()
