import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { signIn } from "next-auth/react";

const LoginPage = () => {
	return (
		<div className='flex flex-col justify-center px-6 lg:px-8 h-[60vh]'>
			<div className='mx-auto w-full max-w-sm'>
				<div className='text-blue-800 text-center text-2xl font-semibold'>Foodies</div>
				<div className='text-center mt-6 text-2xl'>SNS 계정으로 로그인하기</div>
				<p className='mt-2 text-center text-sm text-gray-600'>계정이 없다면 회원가입이 진행됩니다.</p>
			</div>
			<div className='mt-10 mx-auto w-full max-w-sm'>
				<div className='flex flex-col gap-3'>
					<button
						type='button'
						onClick={() => signIn("google")}
						className='text-white flex gap-4 bg-[#4285f4] hover:bg-[#4285f4]/90 font-medium rounded-lg w-full px-5 py-4 text-center items-center justify-center'>
						<AiOutlineGoogle className='w-6 h-6' />
						Sign in With Google
					</button>
					<button
						type='button'
						onClick={() => signIn("naver")}
						className='text-white flex gap-4 bg-[#2db400] hover:bg-[#2db400]/90 font-medium rounded-lg w-full px-5 py-4 text-center items-center justify-center'>
						<SiNaver className='w-6 h-6' />
						Sign in With Naver
					</button>
					<button
						type='button'
						onClick={() => signIn("kakao")}
						className='text-black flex gap-4 bg-[#fef01b] hover:bg-[#fef01b]/90 font-medium rounded-lg w-full px-5 py-4 text-center items-center justify-center'>
						<RiKakaoTalkFill className='w-6 h-6' />
						Sign in With Kakao
					</button>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
