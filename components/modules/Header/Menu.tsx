import { useLang } from "@/hooks/useLang";
import React, { useState } from "react";

const Menu = () => {
    const [showCatalogList, setCatalogList] = useState(false);
    const [showBuyersList, setBuyersList] = useState(false);
    const [showContactsList, setContactsList] = useState(false);
    const {lang, translations} = useLang();

    return(
        <div>

        </div>
    )
};

export default Menu;