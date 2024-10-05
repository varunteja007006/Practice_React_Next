import { useToast } from "@/hooks/use-toast";

function UseToast(props: any) {
  const { toast } = useToast();
  return { toast };
}

export default UseToast;
