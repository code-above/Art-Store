

export default function ContactSection() {

    return (
        <section className=" bg-beige w-full md:grid grid-cols-2 p-20">
            <div className="mr-28 ">
                <h2 className="text-slate-800 text-4xl font-bold mb-6">Lorem Ipsum</h2>   
                <p className="text-sate-800 leading-tight font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>     
            </div>

            <div>
               
            <form className="block mt-12 md:mt-0 md:ml-28" action="" method="POST">
                    <label className="block text-slate-800 pb-2" for="name">Name</label>
                    <input className="rounded-md mb-4 py-2 px-5" id="name" type="text" autocomplete="name" placeholder="John Doe" required />

                    <label className="block text-slate-800 pb-2" for="Email">Email</label>
                    <input className="block rounded-md py-2 px-5 mb-4" id="email" type="text" autocomplete="email" placeholder="john@doe.com" required />
                    <button className="mt-6 px-12 py-3 rounded-2xl bg-slate-400 text-slate-700"type="submit">Submit</button>
             </form>
                
            </div>
        </section>
    )
}