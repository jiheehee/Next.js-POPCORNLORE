'use client';

import { useState } from "react";

export function SignInForm(){
    const [email,setEmail] = useState();
    const [password,setPassword]=useState();

    return (
        <form onSubmit={()=>{

        }}>
            <div>
            <input type="email" className="border w-full" placeholder="이메일"></input>
            </div>
            <div>
            <input type="password" className="border w-full" placeholder="비밀번호"></input>
            </div>

            
    )

}

