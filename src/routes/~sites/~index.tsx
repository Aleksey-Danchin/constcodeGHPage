import { createFileRoute } from "@tanstack/react-router";
import { SiVk } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";

export const Route = createFileRoute("/sites/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container mx-auto h-full">
      <div className="card bg-neutral text-neutral-content shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Сайты:</h2>

          <ul className="menu bg-base-200 rounded-box w-full">
            <li>
              <a
                href="https://www.youtube.com/@web-constcode6252"
                target="_blank"
              >
                <FaYoutube /> YouTube
              </a>
            </li>
            <li>
              <a href="https://vk.com/constcode" target="_blank">
                <SiVk /> ВКонтакте
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
