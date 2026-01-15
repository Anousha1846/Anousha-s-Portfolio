import MyExpertise from "../components/custum/MyExpertise";
import MyBanner from "../components/custum/MyBanner"


export default function Home() {
  return (
    <main className="bg-slate-100">
     <MyBanner/>
     <MyExpertise/>
    </main>
  );
}