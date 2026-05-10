<?php

namespace App\Http\Controllers\Member;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
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
        return redirect('/member/Membership/Success');
    }

    public function success()
    {
        return Inertia::render('Member/Membership/Success');
    }
}
