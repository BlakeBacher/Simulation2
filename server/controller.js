module.exports = {
  getList: (req, res) => {
   
    const db = req.app.get("db");

    db.get_list()
      .then(houses => res.status(200).send(houses))
      .catch(x => res.status(500).send(x));
  },
  addhouse:(req, res) => {
    const db = req.app.get('db'); 
    console.log(req);

    const {name, address, city, state, zipcode}=req.body
    db.add_house([name, address, city, state, zipcode])
        .then(houses => res.status(200).send(houses))
        .catch(x => res.status(500).send(x))
  },
  deletehouse:(req,res)=> {
    const db = req.app.get('db');
    const{id} = req.params

    db.delete_house([id])
        .then(houses => res.status(200).send(houses))
        .catch(() => res.status(500).send())
    },
};
