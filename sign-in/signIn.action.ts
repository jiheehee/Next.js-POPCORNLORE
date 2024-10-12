'use server';

// next.js가 임의로 이 서버 액션에 대한 post 액션 생성
// CSRF 방어 처리가 기본으로 포함 → API를 외부에서 호출하기가 더 어려워짐

export async function signIn(email:string, password: string){
    console.log({email,password});
    //외부 노출이 안되도록 서버 사이드에서만 동작하게 하는 
    if(email === 'admin@admain.com' && password==='admin'){
        return {success: true, message:'인증성공했습니다'};
    }else{
        return {success: false, message:'인증 정보를 확인해주세요'};
    }
}










