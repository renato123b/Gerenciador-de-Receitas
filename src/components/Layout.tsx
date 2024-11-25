const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div>
        <header>
          <h1>Aplicativo de Receitas</h1>
        </header>
        <main>{children}</main>
      </div>
    );
  };
  
  export default Layout;
  