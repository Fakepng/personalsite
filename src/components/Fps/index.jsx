import { useSearchParams } from "react-router-dom";
import FPSStats from "react-fps-stats";

const Fps = () => {
	const [searchParams] = useSearchParams();
	const fps = searchParams.get("fps");

	return <div>{fps && <FPSStats />}</div>;
};

export default Fps;
