AFRAME.registerComponent('bullets',{
    init: function(){
        this.shoot_bullet()
    },
    shoot_bullet: function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key === "k"){
                var bullet = document.createElement("a-entity")
                var cam = document.querySelector("#camera")
                pos = cam.getAttribute("position")
                bullet.setAttribute("position",{
                    x : pos.x,
                    y : pos.y,
                    z:  pos.z
                })
                var camera1 = document.querySelector("#camera").object3D
                var direction = new THREE.Vector3()
                camera1.getWorldDirection(direction)
                bullet.setAttribute("velocity",direction.multiplyScalar(-10))
                var scene = document.querySelector("#scene")
                scene.appendChild(bullet)
            }
        })
    }
})