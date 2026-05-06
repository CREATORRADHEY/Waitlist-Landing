import { Switch, Route, Router as WouterRouter } from "wouter";
import { LandingPage } from "@/pages/LandingPage";
import { QualifyPage } from "@/pages/QualifyPage";
import { ThankYouPage } from "@/pages/ThankYouPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/qualify" component={QualifyPage} />
      <Route path="/thankyou" component={ThankYouPage} />
    </Switch>
  );
}

export default function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}
