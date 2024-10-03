using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class Admin
{
    public Guid AdminId { get; set; }

    public string FullName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string PasswordHash { get; set; } = null!;

    public DateTime? CreatedAt { get; set; }

    public bool? IsActive { get; set; }
}
