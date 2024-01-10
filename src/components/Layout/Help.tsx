import { Button } from "react-daisyui";

const Help = () => {
    return (
        <Button className="w-20 h-20 p-4 fixed right-4 bottom-4" variant="outline" shape="circle">
            <svg
                fill="#000000"
                version="1.1"
                id="Capa_1"
                viewBox="0 0 318.293 318.293"
                stroke="#000000"
                stroke-width="0.0031829300000000005"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.6365860000000001"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                        {" "}
                        <path d="M159.148,0c-52.696,0-95.544,39.326-95.544,87.662h47.736c0-22.007,21.438-39.927,47.808-39.927 c26.367,0,47.804,17.92,47.804,39.927v6.929c0,23.39-10.292,34.31-25.915,50.813c-20.371,21.531-45.744,48.365-45.744,105.899 h47.745c0-38.524,15.144-54.568,32.692-73.12c17.368-18.347,38.96-41.192,38.96-83.592v-6.929C254.689,39.326,211.845,0,159.148,0z "></path>{" "}
                        <rect
                            x="134.475"
                            y="277.996"
                            width="49.968"
                            height="40.297"
                        ></rect>{" "}
                    </g>{" "}
                </g>
            </svg>
        </Button>
    );
};

export default Help;
