"""Simple Rock-Paper-Scissors CLI game.

Run as: python main.py

This module also exposes functions that can be imported for testing.
"""
from __future__ import annotations

import random
from typing import Literal, Tuple

Choice = Literal['rock', 'paper', 'scissors']


def normalize_choice(s: str) -> Choice:
    s = s.strip().lower()
    if s.startswith('r'):
        return 'rock'
    if s.startswith('p'):
        return 'paper'
    if s.startswith('s'):
        return 'scissors'
    raise ValueError(f"Invalid choice: {s}")


def random_choice() -> Choice:
    return random.choice(['rock', 'paper', 'scissors'])


def decide(player: Choice, computer: Choice) -> str:
    """Decide winner.

    Returns one of: 'win', 'lose', 'draw'.
    """
    if player == computer:
        return 'draw'
    wins = {
        ('rock', 'scissors'),
        ('scissors', 'paper'),
        ('paper', 'rock'),
    }
    return 'win' if (player, computer) in wins else 'lose'


def play_round(player_input: str) -> Tuple[str, str, str]:
    """Play one round given raw player input.

    Returns tuple (player_choice, computer_choice, result)
    where result is 'win'|'lose'|'draw'.
    """
    player = normalize_choice(player_input)
    comp = random_choice()
    result = decide(player, comp)
    return player, comp, result


def main() -> None:
    print("Welcome to Rock-Paper-Scissors!")
    try:
        while True:
            raw = input("Choose (rock/paper/scissors) or 'q' to quit: ")
            if not raw:
                continue
            if raw.strip().lower() in {'q', 'quit', 'exit'}:
                print("Goodbye!")
                break
            try:
                player, comp, result = play_round(raw)
            except ValueError as e:
                print(e)
                continue
            print(f"You: {player}  Computer: {comp}  -> {result.upper()}")
            # replay prompt
            again = input("Play again? [Y/n]: ")
            if again.strip() and again.strip().lower().startswith('n'):
                print("Thanks for playing!")
                break
    except (KeyboardInterrupt, EOFError):
        print('\nGoodbye!')


if __name__ == '__main__':
    main()
M