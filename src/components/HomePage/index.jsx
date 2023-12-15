import { Header } from "../Header";

export const HomePage = () => {
  return (
    <div className="main__container">
      <Header />
      <main>
        <section>
          <ul>
            <li>
              <input type="color" name="" id="" />
              <input type="text" placeholder="color-primary-100" />
            </li>
            <li>
              <input type="color" name="" id="" />
              <input type="text" placeholder="color-primary-200" />
            </li>
            <li>
              <input type="color" name="" id="" />
              <input type="text" placeholder="color-primary-300" />
            </li>
            <li>
              <input type="color" name="" id="" />
              <input type="text" placeholder="color-primary-400" />
            </li>
          </ul>
        </section>

        <section>
          <ul>
            <li>
              <input type="color" name="" id="" />
              <input type="text" placeholder="color-secondary-100" />
            </li>
            <li>
              <input type="color" name="" id="" />
              <input type="text" placeholder="color-secondary-200" />
            </li>
            <li>
              <input type="color" name="" id="" />
              <input type="text" placeholder="color-secondary-300" />
            </li>
            <li>
              <input type="color" name="" id="" />
              <input type="text" placeholder="color-secondary-400" />
            </li>
          </ul>
        </section>

        <section>
          <ul>
            <li>
              <input type="color" name="" id="" />
              <input type="text" placeholder="color-accent-1" />
            </li>
            <li>
              <input type="color" name="" id="" />
              <input type="text" placeholder="color-accent-2" />
            </li>
            <li>
              <input type="color" name="" id="" />
              <input type="text" placeholder="color-accent-3" />
            </li>
            <li>
              <input type="color" name="" id="" />
              <input type="text" placeholder="color-accent-4" />
            </li>
          </ul>
        </section>

        <section>
            <div>
                <input type="text" placeholder="Ex: 24, 36, 48, 62"/>
                <button>Copy to Clipboard</button>
            </div>
        </section>
      </main>
    </div>
  );
};
