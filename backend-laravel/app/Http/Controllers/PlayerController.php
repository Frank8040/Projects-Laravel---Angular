<?php

namespace App\Http\Controllers;

use App\Models\Player;
use App\Models\Team;
use Illuminate\Http\Request;

class PlayerController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');
        $players = Player::where('name', 'like', '%' . $search . '%')
            ->orderBy('id', 'asc')
            ->paginate(10);
        $teams = Team::pluck('name', 'id');

        return view('crud-player', compact('players', 'teams', 'search'));
    }

    public function create()
    {
        $teams = Team::pluck('name', 'id');
        return view('create-player', compact('teams'));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'player.team_id' => 'required',
            'player.name' => 'required',
            'player.lastname' => 'required',
            'player.birthdate' => 'required',
            'player.dni' => 'required',
            'player.type' => 'required',
            'player.number' => 'required',
            'player.observations' => 'required',
        ]);

        if (!isset($data['player']['id'])) {
            Player::create($data['player']);
        } else {
            $player = Player::find($data['player']['id']);
            $player->update($data['player']);
        }

        return redirect()->route('players.index')
            ->with('success', 'Registro creado satisfactoriamente');
    }

    public function show(Player $player)
    {
        return view('show-player', compact('player'));
    }

    public function update(Player $player)
    {
        $teams = Team::pluck('name', 'id');
        return view('update-player', compact('player', 'teams'));
    }

    public function destroy(Player $player)
    {
        $player->delete();
        return redirect()->route('players.index')
            ->with('success', 'Registro eliminado satisfactoriamente');
    }
}
