<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Exception;

class MenuController extends Controller {
    public function index(){
        $Menus = Menu::select("id","menu_name", "route_name", "is_nested", "parent_name")->get();
        return Inertia::render("Dashboard/Menu/Index", compact('Menus'));
    }
    public function getMenu(){
        return response()->json(["success" => true, "data" => Menu::all()->toArray()], 200);
    }
    // store form data 
    public function storeForm( Request $r ) {
        $r->validate(["menu_name" => "required|max:255|unique:tb_menu", "route_name" => "required|max:255", "is_nested" => "required|max:5", "parent_name" => "required|max:255"]);
        try { 
            Menu::create(["menu_name" => $r->menu_name, "route_name" => $r->route_name, "is_nested" => $r->is_nested, "parent_name" => $r->parent_name]);
            return response()->json(["success" => true, "message" => "Data successfully created" ], 200);
        } catch ( Exception $e ) {
            return response()->json(["success" => false, "message" => "Data failed created" ], 400);
        }
    }
    public function store(Request $r){
        $r->validate(["menuName" => "required|max:255", "routeName" => "required|max:255", "isNested" => "required|max:5", "parentName" => "required|max:255"]);
        try { 
            Menu::updateOrCreate(["id" => $r->menuId],["menu_name" => $r->menuName, "route_name" => $r->routeName, "is_nested" => $r->isNested, "parent_name" => $r->parentName]);
            return response()->json(["success" => true, "flash" => "Data created successfully", "data" => Menu::all()->toArray()]);
        } catch ( Exception $e ) {
            return response()->json(["success" => false, "error" => $e->getMessage()]);
        }
    }
    public function destroy(){
        $id = request()->id;
        Menu::where(["id" => $id])->delete();
        return response()->json(["success" => true, "flash" => "Data deleted successfully", "data" => Menu::all()->toArray()]);
    }
}
