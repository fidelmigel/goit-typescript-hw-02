import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#646cff"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
export default Loader;
