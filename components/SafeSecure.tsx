import { Call, CallOutgoing } from "iconsax-react"
import { Button } from "./ui/button"

const SafeSecure = () => {
    return (
        <div className="flex h-[50vh] my-36 bg-cw-tourq  items-center justify-center gap-16">
            <div className="basis-3/5 text-center">
                <h1 className="text-6xl mb-8">100% secure and safe</h1>
                <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                    Temporibus blanditiis, libero sequi numquam nemo atque
                    necessitatibus praesentium quasi nisi harum.
                </p>
            </div>
            <div className="basis-2/5">
                <Button variant={'outline'} className="rounded-sm p-6 ">
                    <h1 className="font-medium text-xl flex gap-2 items-center">
                        <span> Schedule a Call</span>
                        <Call size={22} />
                    </h1>
                </Button>
            </div>
        </div>
    )
}

export default SafeSecure