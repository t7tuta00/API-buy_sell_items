const express = require('express');
let router = express.Router();

let ItemsData = [
    {
        id: "0",
        title: "Selling used car",
        description: "Used BMW 1995, black, diesel, etc.",
        category: "Cars",
        location: "London,YK",
        images: "asd123asd123asd123",
        askingprice: 2000,
        dateofposting: 1591012800,
        deliverytype: "Pickup",
        sellername: "Bill BMW",
        sellermail: "Billruleforever@gmail.com",
        sellerphonenumber: "+44 23 448 112"
    },

    {
        id: "1",
        title: "Selling used boat",
        description: "Used boat",
        category: "Boats",
        location: "London,YK2",
        images: "asd123asd123asd123",
        askingprice: 2000,
        dateofposting: 1591012800,
        deliverytype: "Pickup",
        sellername: "Bill BMW",
        sellermail: "Billruleforever@gmail.com",
        sellerphonenumber: "+44 23 448 112"
    }
  ];
  
  let ItemObject = {
        "id": "0",
        "title": "Selling used car",
        "description": "Used BMW 1995, black, diesel, etc.",
        "category": "Cars",
        "location": "London,YK",
        "images": "asd123asd123asd123",
        "askingprice": 2000,
        "dateofposting": 1591012800,
        "deliverytype": "Pickup",
        "sellername": "Bill BMW",
        "sellermail": "Billruleforever@gmail.com",
        "sellerphonenumber": "+44 23 448 112"
  };


router
.route('')
.get((req, res) => {
    res.json({ItemsData});
});

router
.route('/:id')
.get((req, res) => {
    let params = req.params;
    console.log(params.id)
    res.json(ItemsData[params.id]);
});

router
.route('/create')
.post((req, res) => {
          
    ItemsData.push({
        id: ItemsData.length,
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        location: req.body.location,
        images: req.body.images,
        askingprice: req.body.askingprice,
        dateofposting: req.body.dateofposting,
        deliverytype: req.body.deliverytype,
        sellername: req.body.sellername,
        sellermail: req.body.sellermail,
        sellerphonenumber: req.body.sellerphonenumber
      })
      res.sendStatus(201);
    });

//search category
router
.route('/search/category/:category')
.get((req,res) => {
    let category2 = req.params;
    console.log(category2.category)

    var result = ItemsData.filter(obj => obj.category === category2.category)
    console.log(result)
    res.json(result);
})


//search location
router
.route('/search/location/:location')
.get((req,res) => {
    let location2 = req.params;
    console.log(location2.location)

    var result = ItemsData.filter(obj => obj.location === location2.location)
    console.log(result)
    res.json(result);
})

//search dateofposting
router
.route('/search/dateofposting/:dateofposting')
.get((req,res) => {
    let dateofposting2 = req.params;

    console.log(dateofposting2.dateofposting)

    var result = ItemsData.filter(obj => obj.dateofposting === parseInt(dateofposting2.dateofposting))
    console.log(result)
    res.json(result);
})

router
.route('/change/:id')
.put((req,res) => {
    let Itemid = req.params;
    
    ItemsData[Itemid.id] = 
    {
        userid: Itemid.id,
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        location: req.body.location,
        images: req.body.images,
        askingprice: req.body.askingprice,
        dateofposting: req.body.dateofposting,
        deliverytype: req.body.deliverytype,
        sellername: req.body.sellername,
        sellermail: req.body.sellermail,
        sellerphonenumber: req.body.sellerphonenumber
    }

    res.send(ItemsData[Itemid.id]);
  })

router
.route('/delete/:id')
.delete((req, res) => {
    let Itemid = req.params;
    
    console.log(Itemid.id);
    console.log(ItemsData[Itemid.id]);

    ItemsData.splice(Itemid.id,ItemsData.length);
    console.log(ItemsData);
    res.send(ItemsData);
    })

module.exports = router;