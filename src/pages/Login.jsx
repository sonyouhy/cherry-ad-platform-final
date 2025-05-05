export default function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="w-full max-w-md space-y-4">
        <h2 className="text-2xl font-semibold text-center">광고주 로그인</h2>
        <input type="email" placeholder="이메일" className="w-full border p-2 rounded" />
        <input type="password" placeholder="비밀번호" className="w-full border p-2 rounded" />
        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">로그인</button>
      </div>
    </div>
  );
}