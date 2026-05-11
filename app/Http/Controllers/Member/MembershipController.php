<?php

namespace App\Http\Controllers\Member;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MembershipController extends Controller
{
    public function checkout()
    {
        return Inertia::render('Member/Membership/Checkout');
    }

    public function store(Request $request)
    {
        $request->validate([
            'card_name' => ['required', 'string', 'max:255'],
            'card_number' => ['required', 'string', 'max:50'],
        ]);

        $request->user()->update([
            'membership_type' => 'Fit-Pro Membership',
        ]);
        return redirect('/member/membership/success');
    }
    public function logoutToLogin(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login');
    }
    public function success()
    {
        return Inertia::render('Member/Membership/Success');
    }
}
