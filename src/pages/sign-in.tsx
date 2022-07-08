import type { NextPage } from 'next';

const SignIn: NextPage = () => {
  return (
    <>
      <section className="py-4 text-center text-xs">한국어</section>
      <main>
        <h1 className="py-8 text-center text-4xl">Outstagram</h1>
        <div className="mx-auto mt-16 flex max-w-sm flex-col px-8">
          <button className="border-1 border-black p-2" type="button">
            G Sign in with Google
          </button>
        </div>
      </main>
    </>
  );
};

export default SignIn;
