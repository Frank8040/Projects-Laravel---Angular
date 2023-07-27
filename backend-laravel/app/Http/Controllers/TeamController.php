<?php

namespace App\Http\Controllers;

use App\Http\Requests\TeamPostRequest;
use App\Models\Cycle;
use App\Models\School;
use App\Models\Team;
use App\Models\Tournament;

class TeamController extends Controller
{
    public $team,$search;
    public $isOpen=false;
    protected $listeners=['render','delete'=>'delete'];

    public function index()
    {
        $teams = Team::where('name','like','%'.$this->search.'%')
        ->orderBy('id','desc')->paginate(10);
        $tournaments=Tournament::pluck('name','id');
        $schools=School::pluck('name','id');
        $cycles=Cycle::pluck('name','id');
        return view('livewire.crud-team',compact('teams','tournaments','schools','cycles'));
    }

    public function show(Team $team)
    {
        return response()->json($team);
    }

    public function store(TeamPostRequest $request)
    {
        $team = Team::create($request->all());

        return response()->json([
            'message' => "Registro creado satisfactoriamente!",
            'team' => $team
        ], 200);
    }

    public function update(TeamPostRequest $request, Team $team)
    {
        $team->update($request->all());

        return response()->json([
            'message' => "Registro actualizado satisfactoriamente!",
            'team' => $team
        ], 200);
    }

    public function destroy(Team $team)
    {
        $team->delete();
        return response()->json([
            'message' => "Registro eliminado satisfactoriamente!",
        ], 200);
    }
}
