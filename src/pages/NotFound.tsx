import { Button } from "@components/ui/Button/Button";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>Ooops wrong page</p>
      <Button onClick={() => navigate(`/users`)}>Back to application</Button>
    </div>
  );
};
