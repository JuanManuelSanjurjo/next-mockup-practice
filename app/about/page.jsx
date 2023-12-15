"use client"


import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "About",
// };

function About() {
  const router = useRouter()


  return (
    <section className="flex flex-col">
      <h1 className="text-2xl py-5 font-bold w-2/3 m-auto">About</h1>
      <p className="w-2/3 m-auto leading-loose -tracking-tighter ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sequi
        perferendis iusto pariatur dignissimos facere ipsum suscipit! Beatae
        maiores omnis ipsum impedit quas inventore porro doloribus itaque odit.
        Sit, obcaecati. Porro, corporis voluptatum, minus nostrum et non culpa
        numquam quisquam, quo cumque quis? Iste sint excepturi, saepe magnam
        iusto nisi placeat, quis repudiandae fuga adipisci ut consectetur,
        recusandae ab ipsam. Aliquid expedita exercitationem provident, nostrum
        delectus quo dolor. Accusamus accusantium repudiandae magnam vel ex
        delectus! Commodi enim voluptate vitae veritatis nobis minima sed
        mollitia. Corrupti tempore alias repellendus repellat aliquid! Nulla
        deleniti praesentium iusto, culpa, velit ducimus, sapiente eum
        aspernatur magnam quaerat sed qui non sunt atque. Esse itaque natus vero
        illo animi facere, ducimus ipsum inventore odio eum aliquam? Adipisci in
        nam est. Delectus dolorem enim accusamus inventore cumque vel,
        asperiores a. A numquam velit architecto quibusdam, tenetur aperiam,
        recusandae dolorem esse vel nulla voluptatibus inventore molestias
        dolore aliquid. Saepe, est repudiandae nostrum recusandae sunt numquam
        amet ratione, vero id distinctio repellendus ullam nisi iste magni
        laboriosam, in aperiam ducimus incidunt ab cupiditate. Aliquid vel
        asperiores voluptatibus totam voluptatem. Non dicta, ipsum iusto harum
        dolorum placeat, dolor eaque, ea atque cum iste reprehenderit! Officiis
        cum culpa modi ipsam nisi facilis inventore, unde provident tempore
        itaque ex, eos quos ipsa. Quaerat, necessitatibus at sequi nihil nisi
        minima doloribus ipsa, velit praesentium tempora tenetur voluptates
        illum, suscipit autem dolorem. Quo nihil labore autem praesentium ipsa
        similique tempore repellendus nam rem eveniet. Aut quia quaerat, cum
        libero distinctio officia iste facere illum eveniet corporis dolorem
        placeat, maiores tempore sunt rem molestias harum, reiciendis veniam
        eaque inventore modi ipsa eius praesentium neque! Perferendis. Iure
        laboriosam totam, culpa hic ad praesentium repellendus? Quae, eos amet!
        Iure obcaecati ad expedita reiciendis, vel corporis repudiandae libero
        maxime dolorem? Dolor minima rerum ut illo facilis, est voluptates.
      </p>

      <button
        className="my-8 bg-sky-900 px-3 py-2 rounded-md m-auto"
        onClick={() => {
          alert("useRouter can execute code before redirection")
          router.back()
        }}
      >
        Previous page
      </button>
    </section>
  );
}

export default About;
