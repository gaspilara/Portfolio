<main>
    <section class="ticketBox" id="ticketsSection">
        
        <section class="ticketSection">
            
            <article class="ticketCardArticle">
                {foreach from=$categories item=category}
                    {if $category->name == popular}

                        <section class="imgCardSection popular-card">
                            <h4>{$category->name|upper}</h4>
                        </section>
                        <section class="priceCardSection">
                            <h4>${$category->price}</h4>
                        </section>
                        <section class="stockCardSection">
                            <p>Available: <span>{$popular}</span>  tickets</p>
                        </section>

                    {/if}
                {/foreach}
            </article>

            <article class="ticketCardArticle vipCard" id="js-vipCard">
                {foreach from=$categories item=category}
                    {if $category->name == vip}

                        <section class="imgCardSection vip-card">
                            <h1>{$category->name|upper}</h1>
                        </section>
                        <section class="priceCardSection">
                            <h2>${$category->price}</h2>
                        </section>
                        <section class="stockCardSection">
                            <p>Available: <span>{$vip}</span>  tickets</p>
                        </section>

                    {/if}
                {/foreach}
            </article>

            <article class="ticketCardArticle">
                {foreach from=$categories item=category}
                    {if $category->name == promo}
                        <section class="imgCardSection promo-card">
                            <h4>{$category->name|upper}</h4>
                        </section>
                        <section class="priceCardSection">
                            <h4>Free</h4>
                        </section>
                        <section class="stockCardSection">
                            <p>Available: <span>{$promo}</span>  tickets</p>
                        </section>
                    {/if}
                {/foreach}
            </article>

        </section>

        <section class="ticketsTableSection js-show-contain">

            <div class="backBox">
                <button id="js-btnBack">
                    <i class="fas fa-arrow-left"></i>
                </button>
            </div>
            <div class="tableBox">
                <table>
                    <thead>
                        <tr class="trHead">
                            <th>Dj name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Category</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                    {foreach from=$tickets item=ticket}

                        <tr>
                            <td>{$ticket->name}</td>
                            <td>${$ticket->cat_price} ARS</td>
                            <td>{$ticket->date}</td>
                            <td>{$ticket->cat_name|upper}</td>
                            <td class="tdButton">
                                <button>
                                    <i class="fas fa-plus"></i>
                                </button>
                            </td>
                        </tr>
                    
                    {/foreach}

                    </tbody>
                </table>
            </div>

        </section>
        
    </section>

    <section class="iframeSoundcloud" id="iframeSoundcloud">
        <iframe 
            width="100%" 
            height="166" 
            scrolling="no" 
            frameborder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/835512991&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false">
        </iframe>
    </section>

    <footer>
        <p>.WAV MUSIC ©</p>
    </footer>

</main>