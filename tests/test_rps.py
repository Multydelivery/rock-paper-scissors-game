import types
import sys
import random

sys.path.insert(0, str(sys.path[0] + '/..'))

from main import decide, normalize_choice, play_round


def test_decide_draws_and_wins():
    assert decide('rock', 'rock') == 'draw'
    assert decide('rock', 'scissors') == 'win'
    assert decide('rock', 'paper') == 'lose'
    assert decide('paper', 'rock') == 'win'
    assert decide('scissors', 'paper') == 'win'


def test_normalize_choice():
    assert normalize_choice('R') == 'rock'
    assert normalize_choice(' rock ') == 'rock'
    assert normalize_choice('p') == 'paper'
    assert normalize_choice('S') == 'scissors'


def test_play_round_deterministic(monkeypatch):
    # force computer choice
    monkeypatch.setattr('random.choice', lambda seq: 'paper')
    player, comp, result = play_round('r')
    assert player == 'rock'
    assert comp == 'paper'
    assert result == 'lose'
