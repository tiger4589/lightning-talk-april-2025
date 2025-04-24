using Application.AddNote;
using Application.DeleteNote;
using Application.GetNote;
using Application.UpdateNote;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace NotesOrganizer.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController(IMediator mediator) : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> AddNote([FromBody] AddNoteCommand command)
        {
            var noteId = await mediator.Send(command);
            return CreatedAtAction(nameof(GetNote), new { id = noteId }, null);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNote(Guid id)
        {
            await mediator.Send(new DeleteNoteCommand(id));
            return NoContent();
        }

        [HttpPatch]
        public async Task<IActionResult> UpdateNote([FromBody] UpdateNoteCommand command)
        {
            await mediator.Send(command);
            return NoContent();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetNote(Guid id)
        {
            var response = await mediator.Send(new GetNoteQuery(id));
            return Ok(response);
        }
    }
}
