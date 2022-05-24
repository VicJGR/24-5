
import './App.css';
import Cuerpo from "./Cuerpo"

function App() {
  return(
    <>
    <head>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    </head>
    <header>
    <div class="container clearfix">
        <h1 id="logo">
            VJGR
        </h1>
        <nav>
            <a href="">Vine</a>
            <a href="">Vi</a>
            <a href="">Vencí</a>
        </nav>
    </div>
    </header>
  <body>
    <Cuerpo/>
    <br/>
    <footer>
    <div class="bottom section-padding">
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center">
						<div class="copyright">
							<p>© <span>2022</span> <a href="#" class="transition">Víctor Joel Gómez Ríos</a> All rights reserved.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    </footer>
</body>

    </>


  );
}

export default App;
