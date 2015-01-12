using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularServices.Startup))]
namespace AngularServices
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
