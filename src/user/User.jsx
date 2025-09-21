import { useDispatch, useSelector } from "react-redux";
import { userSelectors } from "./store/userSelectors";
import ma from "./vd/ma.mp4";
import fr from "./vd/fr.mp4";
import us from "./vd/usa.mp4";

export default function User() {
  const user = useSelector(userSelectors);
  const dispatch = useDispatch();

  const videos = {
    ma: ma,
    fr: fr,
    us: us,
  };

  return (
    <>
      {user?.name && (
        <div className="box">
          <span>
            {user.name} ({user.age} Years) 
            <img src={`https://flagcdn.com/32x24/${user.country}.png`} alt="" />
          </span>
          <p>
            <video
              src={videos[user.country] || videos["ma"]} // fallback
              autoPlay
              loop
              muted
              style={{width:'500px',borderRadius:'5px'}}
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </p>
        </div>
      )}
    </>
  );
}
