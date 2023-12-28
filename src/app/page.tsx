import Image from "next/image";

import logoImg from "../assets/logo.png"
import { ArrowUpRightFromCircle, Building, Github, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-base-background min-h-screen">
      <div className="w-screen h-72 bg-base-post flex items-center justify-center">
        <Image 
          src={logoImg}
          alt=""
          quality={100}
        />
      </div>

      <div className="px-72">
        <div className="flex gap-8 bg-base-profile p-8 rounded-lg -mt-14 shadow-md">
          <Image 
            src="https://github.com/rodrigogrz.png"
            alt=""
            width={148}
            height={148}
            className="rounded-lg"
          />

          <div className="flex flex-col justify-between">
            <div>
              <div className="flex justify-between mb-2">
                <h1 className="text-base-title text-2xl font-semibold">Rodrigo Grzegorczyk</h1>
                <span className="uppercase text-blue flex items-center gap-2">
                  <strong className="text-sm">github</strong>
                  <ArrowUpRightFromCircle className="w-3 h-3" />
                </span>
              </div>
              <p className="text-base-text">Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
            </div>

            <div className="flex space-x-6">
              <div className="flex items-center gap-2">
                <Github className="text-base-label w-4 h-4" />
                <span className="text-base-subtitle">rodrigogrz</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="text-base-label w-4 h-4" />
                <span className="text-base-subtitle">Rivesa</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-base-label w-4 h-4" />
                <span className="text-base-subtitle">12 seguidores</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
