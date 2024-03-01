<?php
   
namespace App\Http\Controllers\API;
   
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends BaseController
{
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'c_password' => 'required|same:password',
            'phone' => 'required|phone:TR,DE|unique:users'
        ]);
   
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors(),400);       
        }
   
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('user')->accessToken;
        $success['name'] =  $user->name;
        
   
        return $this->sendResponse($success, 'User register successfully.');
    }
   
    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
            $user = Auth::user(); 
            $success['token'] =  $user->createToken('user')->accessToken; 
            $success['name'] =  $user->name;
            $success['phone'] = $user->phone;
            $success['address'] = $user->address;
            $success['email'] = $user->email;
            
            return $this->sendResponse($success, 'User login successfully.');
        } 
        else{ 
            return $this->sendError('Invalid credentials.', ['error'=>'Unauthorised'],400);
        } 
    }
}