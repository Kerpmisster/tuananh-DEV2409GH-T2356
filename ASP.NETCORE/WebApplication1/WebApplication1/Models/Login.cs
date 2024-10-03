using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class Login
    {
        [Required(ErrorMessage ="Không được để trống")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Không được để trống")]
        public string Password { get; set; }
    }
}
