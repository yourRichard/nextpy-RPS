"""Welcome to Nextpy! This file outlines the steps to create a basic app."""

import nextpy as xt
import random


class State(xt.State):
    """The app state."""
    choices: list = ["Rock","Paper","Scissor"]
    com_choice:str
    player_choice:str
    def computer_choice(self):
        self.com_choice = random.choice(self.choices),
        
        xt.text(
            self.com_choice,
            font_size= "30px",
        ),
    def rock_btn(self):
        self.player_choice = "rock",
        self.com_choice = random.choice(self.choices),
        
        xt.text(
            self.com_choice,
            font_size= "30px",
        ),
        xt.text(
            self.player_choice,
            font_size= "30px",
        )
        
    def paper_btn(self):
        self.player_choice = "paper",
        self.com_choice = random.choice(self.choices),
        
        xt.text(
            self.com_choice,
            font_size= "30px",
        ),
        xt.text(
            self.player_choice,
            font_size= "30px",
        ),
        xt.text(
            self.com_choice,
            font_size= "30px",
        ),

    def scissor_btn(self):
        self.player_choice = "scissor",
        self.com_choice = random.choice(self.choices),
        xt.text(
            self.com_choice,
            font_size= "30px",
        ),
        xt.text(
            self.player_choice,
            font_size= "30px",
        ),
        xt.text(
            self.com_choice,
            font_size= "30px",
        ),
        
        



def index() -> xt.Component:
    return xt.container(
        xt.text(
           "Rock,Paper,Scissor game with Nextpy",
           font_size = "32px",
           color = "black",
           width = "2000px",
       ),
        xt.text(
           State.player_choice,
           font_size = "30px",
       ),
        xt.text(
           State.com_choice,
           font_size = "30px",
       ),
        
       xt.spacer(),
       
        xt.box(
          xt.button(
           "Rock",
           on_click = State.rock_btn,
        ),  
          xt.button(
           "Paper",
           on_click = State.paper_btn,
        ),  
          xt.button(
           "Scissor",
           on_click = State.scissor_btn,
        ),  
        ),


    )


# Add state and page to the app.

app = xt.App()
app.add_page(index)
app.compile()
