
import "./About.css";

const About = ()=>{
    return (
        <div className="about">
            <div className="box_resumen">
                <h1 className="tracking-in-expand">Summary</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae itaque obcaecati ut adipisci iusto quo ea ratione sapiente iure culpa exercitationem asperiores explicabo officia vero nisi, corporis minus impedit repellendus saepe nostrum magni quisquam autem reiciendis. Illum hic aspernatur quas.</p>
            </div>
                <div className="box_descripcion">
                    <div className="box_img">
                        <h4 className="tracking-in-expand">Jonatan Avila</h4>
                        <div className="img" ></div>
                        <div className="conteiner_icons">
                            <a href="https://github.com/JONAAVILA" target="_blank" rel="noreferrer">
                             <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler-brand-github" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                            </svg>    
                            </a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icono_code" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#4AD481" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M8.5 13.5l-1.5 -1.5l1.5 -1.5"></path>
                                <path d="M15.5 10.5l1.5 1.5l-1.5 1.5"></path>
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                <path d="M13 9.5l-2 5.5"></path>
                            </svg>
                            <a href="http://www.linkedin.com/in/jonathan-avila-1b1931238" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                                <path d="M8 11l0 5"></path>
                                <path d="M8 8l0 .01"></path>
                                <path d="M12 16l0 -5"></path>
                                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                            </svg>
                            </a>
                            
                        </div>
                        
                    </div>
                    <div className="descripcion">
                        <h2 className="tracking-in-expand">Author</h2>
                        <h4>Web Developer Full Stack</h4>
                        <h4>Studies: Student at Henry</h4>
                        <h4>Origin: Buenos Aires, Argentina</h4>
                        <h4>Years: 34</h4>
                        <h4>Technologies that I master:</h4>
                        <div className="react">
                            <div className="box_icons">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="javascript"><path fill="#F0DB4F" d="M2 1v125h125v-125h-125zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065-.001-10.115.046-20.188.046-30.188h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path></svg>
                            </div>
                            <div className="box_icons">
                                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 128 128" viewBox="0 0 128 128" id="React"><g fill="#00c6ff" class="color61dafb svgShape"><circle cx="64" cy="64" r="11.4" fill="#3AE7FA" class="color000000 svgShape"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" fill="#3AE7FA" class="color000000 svgShape"></path></g></svg>
                            </div> 
                            <div className="box_icons">
                                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 244" id="redux"><path fill="#764ABC" d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"></path></svg>
                            </div>
                            <div className="box_icons">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="express"><path d="M40.53 77.82V50.74H42V55a5.57 5.57 0 0 0 .48-.6 7.28 7.28 0 0 1 6.64-4.12c3.35-.1 6.07 1.14 7.67 4.12a13.24 13.24 0 0 1 .32 12.14c-1.49 3.34-5.17 5-9.11 4.39a7.37 7.37 0 0 1-5.88-3.88V77.82zM42 60.32c.13 1.32.18 2.26.33 3.18.58 3.62 2.72 5.77 6.08 6.16A6.91 6.91 0 0 0 56 65.27a11.77 11.77 0 0 0-.26-9.68 6.77 6.77 0 0 0-7.13-3.94 6.59 6.59 0 0 0-5.89 4.87A33.4 33.4 0 0 0 42 60.32zM88.41 64A7.92 7.92 0 0 1 80.67 71c-6.16.31-9.05-3.78-9.51-8.5A13.62 13.62 0 0 1 72.36 55a8.37 8.37 0 0 1 8.71-4.67 8 8 0 0 1 7.1 6.09 41.09 41.09 0 0 1 .69 4.5H72.67c-.3 4.28 2 7.72 5.26 8.55 4.06 1 7.53-.76 8.79-4.62C87 63.86 87.51 63.72 88.41 64zM72.67 59.55H87.14c-.09-4.56-2.93-7.86-6.78-7.91C76 51.57 72.86 54.75 72.67 59.55zM91.39 64.1h1.42A5.69 5.69 0 0 0 96.15 69a8.73 8.73 0 0 0 7.58-.2 3.41 3.41 0 0 0 2-3.35 3.09 3.09 0 0 0-2.08-3.09c-1.56-.58-3.22-.9-4.81-1.41A35.25 35.25 0 0 1 94 59.18c-2.56-1.25-2.72-6.12.18-7.66a10.21 10.21 0 0 1 9.76-.15 5.14 5.14 0 0 1 2.6 5.24h-1.22c0-.06-.11-.11-.11-.17-.15-3.89-3.41-5.09-6.91-4.75a9.17 9.17 0 0 0-3 .91 3 3 0 0 0-1.74 3 3 3 0 0 0 2 2.82c1.54.56 3.15.92 4.73 1.36 1.27.35 2.59.58 3.82 1a4.51 4.51 0 0 1 3.1 4.07 4.81 4.81 0 0 1-2.59 5c-3.34 1.89-8.84 1.39-11.29-1A6.67 6.67 0 0 1 91.39 64.1zM125.21 56.61h-1.33c0-.18-.07-.34-.09-.49a4.35 4.35 0 0 0-3.54-4.18 8.73 8.73 0 0 0-5.61.27 3.41 3.41 0 0 0-2.47 3.25 3.14 3.14 0 0 0 2.4 3.16c2 .62 4.05 1 6.08 1.56a17 17 0 0 1 1.94.59 5 5 0 0 1 .27 9.31 11.13 11.13 0 0 1-9 .09 6.24 6.24 0 0 1-3.76-6.06l.56 0h.74a7.29 7.29 0 0 0 11.1 4.64 3.57 3.57 0 0 0 1.92-3.34 3.09 3.09 0 0 0-2.11-3.07c-1.56-.58-3.22-.89-4.81-1.4a35.43 35.43 0 0 1-4.87-1.75c-2.5-1.23-2.7-6.06.15-7.6a10.07 10.07 0 0 1 9.92-.11A5.23 5.23 0 0 1 125.21 56.61zM38.1 70.51a2.29 2.29 0 0 1-2.84-1.08c-1.63-2.44-3.43-4.77-5.16-7.15l-.75-1c-2.06 2.76-4.12 5.41-6 8.16a2.2 2.2 0 0 1-2.7 1.06l7.73-10.37-7.19-9.37a2.39 2.39 0 0 1 2.85 1c1.67 2.44 3.52 4.77 5.36 7.24 1.85-2.45 3.68-4.79 5.39-7.21a2.15 2.15 0 0 1 2.68-1l-2.79 3.7c-1.25 1.65-2.48 3.31-3.78 4.92a1 1 0 0 0 0 1.49C33.29 64.07 35.66 67.25 38.1 70.51zM70.92 50.66v1.4a7.25 7.25 0 0 0-7.72 7.49q0 4.94 0 9.88c0 .35 0 .7 0 1.12H61.77V50.74h1.4V54.8C64.9 51.84 67.57 50.74 70.92 50.66zM2.13 60c.21-1 .34-2.09.63-3.11 1.73-6.15 8.78-8.71 13.63-4.9 2.84 2.23 3.55 5.39 3.41 8.95h-16C3.54 67.3 8.13 71.14 14 69.18a6.09 6.09 0 0 0 3.87-4.31c.31-1 .81-1.17 1.76-.88a8.12 8.12 0 0 1-3.88 5.93 9.4 9.4 0 0 1-10.95-1.4 9.85 9.85 0 0 1-2.46-5.78c0-.34-.13-.68-.2-1Q2.13 60.85 2.13 60zm1.69-.43H18.29c-.09-4.61-3-7.88-6.88-7.91C7.09 51.6 4 54.8 3.81 59.55z"></path></svg>
                            </div>
                            <div className="box_icons">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 355 400" id="html"><path fill="#E44D26" d="M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z"></path><path fill="#F16529" d="M128 337.95l84.417-23.403 19.86-222.49H128V337.95z"></path><path fill="#EBEBEB" d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z"></path><path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zM92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0zM193.21 0h16.235v32.508h22.824v16.05h-39.06V0z"></path><path fill="#FFF" d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z"></path></svg>
                            </div>
                            <div className="box_icons">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 150" id="css3"><path fill="#131313" d="M89.234 5.856h-7.384l7.679 8.333v3.967h-15.816v-4.645h7.678l-7.678-8.333v-3.971h15.521v4.649zm-18.657 0h-7.384l7.679 8.333v3.967h-15.817v-4.645h7.679l-7.679-8.333v-3.971h15.522v4.649zm-18.474.19h-7.968v7.271h7.968v4.839h-13.632v-16.949h13.632v4.839z"></path><path fill="#1572B6" d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z"></path><path fill="#33A9DC" d="M64.001 119.072l29.439-8.162 6.926-77.591h-36.365v85.753z"></path><path fill="#fff" d="M64 66.22h14.738l1.019-11.405h-15.757v-11.138h27.929000000000002l-.267 2.988-2.737 30.692h-24.925v-11.137z"></path><path fill="#EBEBEB" d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883h-11.178999999999998l1.561 17.488 22.814 6.333.052-.015v-11.587z"></path><path fill="#fff" d="M77.792 76.886l-1.342 14.916-12.422 3.353v11.588l22.833-6.328.168-1.882 1.938-21.647h-11.175z"></path><path fill="#EBEBEB" d="M64.039 43.677v11.136999999999999h-26.903000000000002l-.224-2.503-.507-5.646-.267-2.988h27.901zM64 66.221v11.138h-12.247l-.223-2.503-.508-5.647-.267-2.988h13.245z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div> 
        </div>
    )
}
export default About;