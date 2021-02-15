He decidido optar para este esquema del database porque he querido evitar de crear varias referencias, siendo una mala práctica para los db noSQL.
He separado los proveedores de los clientes para poder asignar a cada proveedor una marca por separado y además
porque he pensado que en una aplicación real, los details de los proveedores no serían de gran utilizo. 

La desventaja de este modelo podría ser representada por el array de orders: si crece en numero se podrían superar
y alcanzar los 16MB de límite. En este caso se optaría para un modelo a reference y no embedding.