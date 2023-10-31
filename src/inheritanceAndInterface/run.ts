import { Cat } from "./cat";
import { Bird } from "./bird";

const cat1 = new Cat("Garfield", "Lasagna");
cat1.move(10);

const bird1 = new Bird("Tweety", 15);
bird1.fly(80);

cat1.eat(30);
bird1.eat(234);